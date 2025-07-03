import { Component } from '@angular/core';
import { CtaComponent } from '../../components/cta/cta.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { NavBarLandingComponent } from '../../components/nav-bar-landing/nav-bar-landing.component';
import { BenefitsComponent } from "../../components/benefits/benefits.component";
import { IntroComponent } from "../../components/intro/intro.component";
import { FeaturesComponent } from "../../components/features/features.component";
import { PricingComponent } from "../../components/pricing/pricing.component";
import { ContactComponent } from "../../components/contact/contact.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [BenefitsComponent, CtaComponent, FooterComponent, HeroComponent, NavBarLandingComponent, BenefitsComponent, IntroComponent, FeaturesComponent, PricingComponent, ContactComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
