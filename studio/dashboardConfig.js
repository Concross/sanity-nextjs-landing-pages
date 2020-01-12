export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e1b9255490c189cfe7d87d6',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-wzsimhsi',
                  apiId: 'ea58157a-6642-468f-baf7-37c17eea369b'
                },
                {
                  buildHookId: '5e1b925519bf71f5782e17cc',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-hotaed4w',
                  apiId: '03f3bd66-56f8-4e3d-a4db-5156fe0ad730'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Concross/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-hotaed4w.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
