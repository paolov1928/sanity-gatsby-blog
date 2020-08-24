export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5f437f2805ebe9706aed87fd',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-k5mszoh9',
                  apiId: 'c9e3dee7-994a-4161-9cd5-2346ae70badf'
                },
                {
                  buildHookId: '5f437f28a293b7cc404a9995',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-io94evon',
                  apiId: '304dd9bf-439a-494b-8578-50a24dbe1f50'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/paolov1928/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-io94evon.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
