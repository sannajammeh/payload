import type { CollectionConfig } from '../../../packages/payload/src/collections/config/types'

import CustomEditView from '../components/views/CustomEdit'

export const customViews1Slug = 'custom-views-one'

export const CustomViews1: CollectionConfig = {
  slug: customViews1Slug,
  versions: true,
  admin: {
    components: {
      views: {
        // This will override the entire Edit view including all nested views, i.e. `/edit/:id/*`
        // To override one specific nested view, use the nested view's slug as the key
        Edit: CustomEditView,
      },
    },
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
  ],
}
