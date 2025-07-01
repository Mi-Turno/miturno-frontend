import { Component } from '@angular/core';
import { PreciosComponent } from '../../components/precios/precios.component';
import { CtaComponent } from '../../components/cta/cta.component';
import { ContactoComponent } from '../../components/contacto/contacto.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { NavBarLandingComponent } from '../../components/nav-bar-landing/nav-bar-landing.component';
import { BenefitsComponent } from "../../components/benefits/benefits.component";
import { IntroComponent } from "../../components/intro/intro.component";
import { FeaturesComponent } from "../../components/features/features.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [BenefitsComponent, PreciosComponent, CtaComponent, ContactoComponent, FooterComponent, HeroComponent, NavBarLandingComponent, BenefitsComponent, IntroComponent, FeaturesComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
