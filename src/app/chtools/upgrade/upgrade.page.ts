/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit, ViewChild, ɵConsole } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { StripeService, StripeCardComponent } from 'ngx-stripe';
import {
  StripeCardElementOptions,
  StripeElementsOptions,
  PaymentIntent,
} from '@stripe/stripe-js';
import { Router } from '@angular/router';
import { environment as env } from '../../../environments/environment';
import { ToastController, LoadingController } from '@ionic/angular';
import { AuthService } from '../../_services/auth.service';

@Component({
  selector: 'app-upgrade',
  templateUrl: './upgrade.page.html',
  styleUrls: ['./upgrade.page.scss'],
})
export class UpgradePage implements OnInit {
  @ViewChild(StripeCardComponent) card: StripeCardComponent;

  color = 'danger';
  cardOptions: StripeCardElementOptions = {
		style: {
			// iconStyle: 'solid',
      base: {
        iconColor: '#7f7e78',
        color: '#7f7e78',
				fontWeight: '300',
				// border: '1px solid #000',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Helvetica Neue", "Roboto", sans-serif',
        fontSize: '18px',
        '::placeholder': {
          color: '#7f7e78',
        },
      },
    },
  };

  elementsOptions: StripeElementsOptions = {
    locale: 'en',
  };

  stripeTest: FormGroup;
	amountinit: number;
	loading = false;
	// tslint:disable-next-line: variable-name
	api_token: any;
	priceSet = false;
	title: any;
  result: any;
  freeTrial = false;
  upgrade: boolean;
  userDetails: any;
  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private admin: AuthService,
		  private stripeService: StripeService,
    private router: Router,
    private toastController: ToastController,
    private loadingController: LoadingController
  ) { }

  async ngOnInit() {

    const user: any = await JSON.parse(localStorage.getItem('user'));
    const result = user.result;
    this.userDetails = result;
		  this.api_token = result.api_token;
		  this.stripeTest = this.fb.group({
      name: ['', [Validators.required]],
      // amount: [1001, [Validators.required, Validators.pattern(/\d+/)]],
    });
    this.getDetails();
  }

  pay(): void {
		this.loading = true;
  if (this.stripeTest.valid) {
      this.createPaymentIntent(this.api_token, this.amountinit)
        .pipe(
          switchMap((pi: any) =>
            this.stripeService.confirmCardPayment(pi.result.client_secret, {
              payment_method: {
                card: this.card.element,
                billing_details: {
                  name: this.stripeTest.get('name').value,
                },
              },
            })
          )
        )
				.subscribe((result) => {
					this.loading = false;
     if (result.error) {
            // Show error to your customer (e.g., insufficient funds)
            // const color = 'success';
              this.presentToast(this.color, result.error.message);
						// this.alertService.danger(result.error.message);
            // console.log(result.error.message);
          } else {
            // The payment has been processed!
            if (result.paymentIntent.status === 'succeeded') {
              // Show a success message to your customer
              const color = 'success';
              this.presentToast(color, 'Please complete the form');
							// this.alertService.success('Payment Successfull');
							       this.router.navigateByUrl('/home/user-profile');
            }
          }
        }, err => {
            this.presentToast(this.color, err.message);
				// this.alertService.danger(err.message);
			});
    } else {
			console.log(this.stripeTest);
   this.loading = false;
   this.presentToast(this.color, 'Please complete the form');
			// this.alertService.danger('Please complete the form');
    }
  }

	// tslint:disable-next-line: variable-name
	createPaymentIntent(api_token, amount): Observable<PaymentIntent> {
		const formData = new FormData();
		formData.append('api_token', api_token);
		formData.append('amount', amount);
  return this.http.post<PaymentIntent>(
      `${env.apiUrl}/pay`, formData);
  }

	setAmount(selectedPackage: any) {
		this.priceSet = true;
		this.title = selectedPackage;
		if (selectedPackage === 'founders') {
			// alert(selectedPackage);
			// this.alertService.success('yes');
			this.amountinit = 24700;
		} else if (selectedPackage === 'premium') {
			// alert(selectedPackage);
			this.amountinit = 3700;
		}
	}


  async presentToast(color, message) {
    const toast = await this.toastController.create({
      message,
      color,
      duration: 3000
    });
    toast.present();
  }
  async freetrial() {
    const loading = await this.loadingController.create({
      spinner: null,
      cssClass: 'custom-loading'
    });
    await loading.present();
    this.admin.freeTrial(this.api_token).subscribe(async (res: any) => {
      await loading.dismiss();
      const color = 'primary';
      this.presentToast(color, res.message);
    });
  }
  getDetails() {
    this.admin.getDetails(this.api_token).subscribe((res: any) => {
      if (res.status === 'success') {
        this.result = res.result;
        // this.data = JSON.parse(this.result.data);
        if (this.result.subscription_expiry === null) {
          this.freeTrial = true;
          this.upgrade = true;
        }else{
          this.freeTrial = false;
        }
        if (res.status === 'validate') {
          const color = 'danger';
          this.presentToast(color, res.message);
          // this.alertService.danger(res.message);
          this.router.navigateByUrl('/auth/validate/ ' + this.api_token);
        } else {
        }
      } else {
        const color = 'danger';
        this.presentToast(color, res.message);
        // this.alertService.danger(res.message);
      }
      // console.log(res);

      // console.log(this.data);
    }, err => {
      const color = 'danger';
      this.presentToast(color, err.message);
      // this.alertService.danger(err.message);
    });
  }

	garyAccess() {
		const ch_user_id = this.userDetails.ch_user_id;
		const ch_user_email = this.userDetails.email;
		// console.log(`https://garyvip.managemych.club/link_rally?ch_user_id=${ch_user_id}&email=${ch_user_email}`)
		window.open(`https://garyvip.managemych.club/link_rally?ch_user_id=${ch_user_id}&email=${ch_user_email}`);
	}
}
