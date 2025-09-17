import type { Schema, Struct } from '@strapi/strapi';

export interface HomeContentBlock extends Struct.ComponentSchema {
  collectionName: 'components_home_content_blocks';
  info: {
    displayName: 'ContentBlock';
  };
  attributes: {
    buttonLink: Schema.Attribute.String & Schema.Attribute.Required;
    buttonText: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    paragraph: Schema.Attribute.RichText & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeCtaBanner extends Struct.ComponentSchema {
  collectionName: 'components_home_cta_banners';
  info: {
    displayName: 'CtaBanner';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'>;
    buttonLink: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    decorativeImages: Schema.Attribute.Media<'images', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeFeatureGrid extends Struct.ComponentSchema {
  collectionName: 'components_home_feature_grids';
  info: {
    displayName: 'FeatureGrid';
  };
  attributes: {
    features: Schema.Attribute.Component<'home.feature-item', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeFeatureItem extends Struct.ComponentSchema {
  collectionName: 'components_home_feature_items';
  info: {
    displayName: 'FeatureItem';
  };
  attributes: {
    buttonLink: Schema.Attribute.String & Schema.Attribute.Required;
    buttonText: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.String & Schema.Attribute.Required;
    icon: Schema.Attribute.Media<'images' | 'files'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeHero extends Struct.ComponentSchema {
  collectionName: 'components_home_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    buttonLink: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    Slide: Schema.Attribute.Component<'home.slides', true>;
    title: Schema.Attribute.String;
  };
}

export interface HomeImageGridCta extends Struct.ComponentSchema {
  collectionName: 'components_home_image_grid_ctas';
  info: {
    displayName: 'ImageGridCTA';
  };
  attributes: {
    buttonLink: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    images: Schema.Attribute.Media<'images', true>;
    paragraph: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
  };
}

export interface HomeImageStatItem extends Struct.ComponentSchema {
  collectionName: 'components_home_image_stat_items';
  info: {
    displayName: 'ImageStatItem';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files'>;
    label: Schema.Attribute.String;
    statistic: Schema.Attribute.String;
  };
}

export interface HomeInfoCard extends Struct.ComponentSchema {
  collectionName: 'components_home_info_cards';
  info: {
    displayName: 'InfoCard';
  };
  attributes: {
    buttonLink: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    paragraph: Schema.Attribute.RichText;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeInfoCardGrid extends Struct.ComponentSchema {
  collectionName: 'components_home_info_card_grids';
  info: {
    displayName: 'InfoCardGrid';
  };
  attributes: {
    cards: Schema.Attribute.Component<'home.info-card', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeLogoBanner extends Struct.ComponentSchema {
  collectionName: 'components_home_logo_banners';
  info: {
    displayName: 'LogoBanner';
  };
  attributes: {
    logos: Schema.Attribute.Component<'home.logo-item', true>;
  };
}

export interface HomeLogoItem extends Struct.ComponentSchema {
  collectionName: 'components_home_logo_items';
  info: {
    displayName: 'LogoItem';
  };
  attributes: {
    link: Schema.Attribute.String;
    logoImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    logoName: Schema.Attribute.String;
  };
}

export interface HomeNewsShowcase extends Struct.ComponentSchema {
  collectionName: 'components_home_news_showcases';
  info: {
    displayName: 'NewsShowcase';
  };
  attributes: {
    article: Schema.Attribute.Relation<'oneToOne', 'api::article.article'>;
    articles: Schema.Attribute.Relation<'oneToMany', 'api::article.article'>;
    buttonLink: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeServiceLink extends Struct.ComponentSchema {
  collectionName: 'components_home_service_links';
  info: {
    displayName: 'ServiceLink';
  };
  attributes: {
    link: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface HomeServicesHighlight extends Struct.ComponentSchema {
  collectionName: 'components_home_services_highlights';
  info: {
    displayName: 'ServicesHighlight';
  };
  attributes: {
    buttonLink: Schema.Attribute.String & Schema.Attribute.Required;
    buttonText: Schema.Attribute.String & Schema.Attribute.Required;
    imageStats: Schema.Attribute.Component<'home.image-stat-item', true>;
    services: Schema.Attribute.Component<'home.service-link', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeSlides extends Struct.ComponentSchema {
  collectionName: 'components_home_slides';
  info: {
    displayName: 'Slides';
  };
  attributes: {
    altText: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos', true>;
  };
}

export interface HomeStats extends Struct.ComponentSchema {
  collectionName: 'components_home_stats';
  info: {
    displayName: 'StatItem';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    number: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeStatsBanner extends Struct.ComponentSchema {
  collectionName: 'components_home_stats_banners';
  info: {
    displayName: 'StatsBanner';
  };
  attributes: {
    statItem: Schema.Attribute.Component<'home.stats', true>;
  };
}

export interface HomeTestimonialsShowcase extends Struct.ComponentSchema {
  collectionName: 'components_home_testimonials_showcases';
  info: {
    displayName: 'TestimonialsShowcase';
  };
  attributes: {
    buttonLink: Schema.Attribute.String;
    butttonText: Schema.Attribute.String;
    logo: Schema.Attribute.Media<'images'>;
    paragraph: Schema.Attribute.RichText;
    testimonial: Schema.Attribute.Relation<
      'oneToOne',
      'api::testimonial.testimonial'
    >;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LawyersCredential extends Struct.ComponentSchema {
  collectionName: 'components_lawyers_credentials';
  info: {
    displayName: 'Credential';
  };
  attributes: {
    degree: Schema.Attribute.String;
    university: Schema.Attribute.String;
  };
}

export interface LawyersPageHero extends Struct.ComponentSchema {
  collectionName: 'components_lawyers_page_heroes';
  info: {
    displayName: 'PageHero';
  };
  attributes: {
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
    video: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface LawyersSeo extends Struct.ComponentSchema {
  collectionName: 'components_lawyers_seos';
  info: {
    displayName: 'Seo';
  };
  attributes: {};
}

export interface LawyersTeamList extends Struct.ComponentSchema {
  collectionName: 'components_lawyers_team_lists';
  info: {
    displayName: 'TeamList';
  };
  attributes: {
    lawyers: Schema.Attribute.Relation<'oneToMany', 'api::lawyer.lawyer'>;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'home.content-block': HomeContentBlock;
      'home.cta-banner': HomeCtaBanner;
      'home.feature-grid': HomeFeatureGrid;
      'home.feature-item': HomeFeatureItem;
      'home.hero': HomeHero;
      'home.image-grid-cta': HomeImageGridCta;
      'home.image-stat-item': HomeImageStatItem;
      'home.info-card': HomeInfoCard;
      'home.info-card-grid': HomeInfoCardGrid;
      'home.logo-banner': HomeLogoBanner;
      'home.logo-item': HomeLogoItem;
      'home.news-showcase': HomeNewsShowcase;
      'home.service-link': HomeServiceLink;
      'home.services-highlight': HomeServicesHighlight;
      'home.slides': HomeSlides;
      'home.stats': HomeStats;
      'home.stats-banner': HomeStatsBanner;
      'home.testimonials-showcase': HomeTestimonialsShowcase;
      'lawyers.credential': LawyersCredential;
      'lawyers.page-hero': LawyersPageHero;
      'lawyers.seo': LawyersSeo;
      'lawyers.team-list': LawyersTeamList;
    }
  }
}
