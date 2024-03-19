import type { Schema, Attribute } from '@strapi/strapi';

export interface GlobalComponentsCustomTwoVideos extends Schema.Component {
  collectionName: 'components_global_components_custom_two_videos';
  info: {
    displayName: 'Custom Two Videos';
    icon: 'slideshow';
    description: '';
  };
  attributes: {
    first_video_embed_url: Attribute.Text;
    second_video_embed_url: Attribute.Text;
    first_video_cover_image: Attribute.Media;
    cursor_label: Attribute.String;
    progress_bar: Attribute.Boolean & Attribute.DefaultTo<true>;
    video_sound_control: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

export interface GlobalComponentsFeaturedProjects extends Schema.Component {
  collectionName: 'components_global_components_featured_projects';
  info: {
    displayName: ' Featured Projects';
    icon: 'calendar';
    description: '';
  };
  attributes: {
    block_type: Attribute.Boolean & Attribute.DefaultTo<false>;
    projects: Attribute.Relation<
      'global-components.featured-projects',
      'oneToMany',
      'api::project.project'
    >;
  };
}

export interface GlobalComponentsTitleAndText extends Schema.Component {
  collectionName: 'components_global_components_title_and_texts';
  info: {
    displayName: 'Title & Text';
    icon: 'apps';
  };
  attributes: {
    Title: Attribute.String;
    Text: Attribute.Blocks;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'global-components.custom-two-videos': GlobalComponentsCustomTwoVideos;
      'global-components.featured-projects': GlobalComponentsFeaturedProjects;
      'global-components.title-and-text': GlobalComponentsTitleAndText;
    }
  }
}
