export default ({ env }) => ({
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        baseUrl: env("S3_SUBDOMAIN_CDN"),
        rootPath: env("S3_BUCKET_PATH"),
        credentials: {
          accessKeyId: env("S3_ACCESS_KEY_ID"),
          secretAccessKey: env("S3_ACCESS_SECRET"),
        },
        region: env("S3_REGION"),
        endpoint: env("S3_ENDPOINT"),
        params: {
          Bucket: env("S3_BUCKET"),
        },
      },
    },
  },
  email: {
    config: {
      provider: "sendgrid",
      providerOptions: {
        apiKey: env("SENDGRID_API_KEY"),
      },
      settings: {
        defaultFrom: env("SENDGRID_DEFAULT_FROM"),
        defaultReplyTo: env("SENDGRID_DEFAULT_REPLY_TO"),
      },
    },
  },
  // @see https://github.com/strapi-community/strapi-plugin-redis
  redis: {
    config: {
      connections: {
        default: {
          connection: {
            // @see https://github.com/luin/ioredis/blob/master/API.md#new-redisport-host-options
            host: env("REDIS_HOST") || "localhost",
            port: env.int("REDIS_PORT") || 6379,
            db: env.int("REDIS_DB") || 0,
            username: env("REDIS_USERNAME"),
            password: env("REDIS_PASSWORD"),
          },
          settings: {
            debug: env.bool("REDIS_DEBUG") || false,
          },
        },
      },
    },
  },
  // Configure the redis cache plugin
  "rest-cache": {
    config: {
      provider: {
        name: "redis",
        options: {
          max: 108000000,
          connection: "default",
        },
      },
      strategy: {
        // if you are using keyPrefix for your Redis, please add <keysPrefix>
        keysPrefix: env("REDIS_KEY_PREFIX"),
        debug: env.bool("REDIS_DEBUG") || false,
        resetOnStartup: true,
        hitpass: false,
        contentTypes: [
          // list of Content-Types UID to cache
          "api::about-us.about-us",
          "api::blog-category.blog-category",
          "api::blog-page.blog-page",
          "api::blog-post.blog-post",
          "api::career-application.career-application",
          "api::career-type.career-type",
          "api::careers-page.careers-page",
          "api::contact-us.contact-us",
          "api::dossier.dossier",
          "api::event.event",
          "api::event-category.event-category",
          "api::events-page.events-page",
          "api::footer.footer",
          "api::home-page.home-page",
          "api::info-page.info-page",
          "api::menu.menu",
          "api::partner.partner",
          "api::partners-page.partners-page",
          "api::program.program",
          "api::publication.publication",
          "api::publication-category.publication-category",
          "api::publications-page.publications-page",
          "api::team-page.team-page",
        ],
      },
    },
  },
  // ckeditor: {
  //   enabled: true,
  //   config: {
  //     plugin: {
  //       // disable data-theme tag setting //
  //       // setAttribute:false,
  //       // disable strapi theme, will use default ckeditor theme //
  //       // strapiTheme:false,
  //       // styles applied to editor container (global scope) //
  //       // styles:`
  //       // .ck.ck-editor__main .ck-focused{
  //       //   max-height: 700px;
  //       // }
  //       // :root{
  //       //   --ck-color-focus-border:red;
  //       //   --ck-color-text:red;
  //       // }
  //       // `
  //     },
  //     editor: {
  //       // editor default config

  //       // https://ckeditor.com/docs/ckeditor5/latest/features/markdown.html
  //       // if you need markdown support and output set: removePlugins: [''],
  //       // default is
  //       // removePlugins: ['Markdown'],

  //       // https://ckeditor.com/docs/ckeditor5/latest/features/toolbar/toolbar.html
  //       toolbar: {
  //         items: [
  //           "paragraph",
  //           "heading1",
  //           "heading2",
  //           "|",
  //           "bold",
  //           "italic",
  //           "fontColor",
  //           "fontBackgroundColor",
  //           "fontFamily",
  //           "underline",
  //           "fontSize",
  //           "removeFormat",
  //           "|",
  //           "bulletedList",
  //           "todoList",
  //           "numberedList",
  //           "|",
  //           "alignment",
  //           "outdent",
  //           "indent",
  //           "horizontalLine",
  //           "|",
  //           "StrapiMediaLib",
  //           "insertTable",
  //           "blockQuote",
  //           "mediaEmbed",
  //           "link",
  //           "highlight",
  //           "|",
  //           "htmlEmbed",
  //           "sourceEditing",
  //           "code",
  //           "codeBlock",
  //           "|",
  //           "subscript",
  //           "superscript",
  //           "strikethrough",
  //           "specialCharacters",
  //           "|",
  //           "heading",
  //           "fullScreen",
  //           "undo",
  //           "redo",
  //         ],
  //       },
  //       // https://ckeditor.com/docs/ckeditor5/latest/features/font.html
  //       fontSize: {
  //         options: [9, 11, 13, "default", 17, 19, 21, 27, 35],
  //         supportAllValues: false,
  //       },
  //       fontFamily: {
  //         options: [
  //           "default",
  //           "Arial, Helvetica Neue, Helvetica, Source Sans Pro, sans-serif",
  //           "Courier New, Courier, monospace",
  //           "Georgia, serif",
  //           "Lucida Sans Unicode, Lucida Grande, sans-serif",
  //           "Tahoma, Geneva, sans-serif",
  //           "Times New Roman, Times, serif",
  //           "Trebuchet MS, Helvetica, sans-serif",
  //           "Verdana, Geneva, sans-serif",
  //           "Roboto, Roboto Black, Roboto Medium, Roboto Light, sans-serif",
  //         ],
  //         supportAllValues: true,
  //       },
  //       fontColor: {
  //         columns: 5,
  //         documentColors: 10,
  //       },
  //       fontBackgroundColor: {
  //         columns: 5,
  //         documentColors: 10,
  //       },
  //       // https://ckeditor.com/docs/ckeditor5/latest/features/ui-language.html
  //       // default language: 'en',
  //       // https://ckeditor.com/docs/ckeditor5/latest/features/images/images-overview.html
  //       image: {
  //         resizeUnit: "%",
  //         resizeOptions: [
  //           {
  //             name: "resizeImage:original",
  //             value: null,
  //             icon: "original",
  //           },
  //           {
  //             name: "resizeImage:25",
  //             value: "25",
  //             icon: "small",
  //           },
  //           {
  //             name: "resizeImage:50",
  //             value: "50",
  //             icon: "medium",
  //           },
  //           {
  //             name: "resizeImage:75",
  //             value: "75",
  //             icon: "large",
  //           },
  //         ],
  //         toolbar: [
  //           "toggleImageCaption",
  //           "imageTextAlternative",
  //           "imageStyle:inline",
  //           "imageStyle:block",
  //           "imageStyle:side",
  //           "linkImage",
  //           "resizeImage:25",
  //           "resizeImage:50",
  //           "resizeImage:75",
  //           "resizeImage:original",
  //         ],
  //       },
  //       // https://ckeditor.com/docs/ckeditor5/latest/features/table.html
  //       table: {
  //         contentToolbar: [
  //           "tableColumn",
  //           "tableRow",
  //           "mergeTableCells",
  //           "tableCellProperties",
  //           "tableProperties",
  //           "toggleTableCaption",
  //         ],
  //       },
  //       // https://ckeditor.com/docs/ckeditor5/latest/features/headings.html
  //       heading: {
  //         options: [
  //           {
  //             model: "paragraph",
  //             title: "Paragraph",
  //             class: "ck-heading_paragraph",
  //           },
  //           {
  //             model: "heading1",
  //             view: "h1",
  //             title: "Heading 1",
  //             class: "ck-heading_heading1",
  //           },
  //           {
  //             model: "heading2",
  //             view: "h2",
  //             title: "Heading 2",
  //             class: "ck-heading_heading2",
  //           },
  //           {
  //             model: "heading3",
  //             view: "h3",
  //             title: "Heading 3",
  //             class: "ck-heading_heading3",
  //           },
  //           {
  //             model: "heading4",
  //             view: "h4",
  //             title: "Heading 4",
  //             class: "ck-heading_heading4",
  //           },
  //         ],
  //       },
  //       // https://ckeditor.com/docs/ckeditor5/latest/features/general-html-support.html
  //       // Regular expressions (/.*/  /^(p|h[2-4])$/' etc) for htmlSupport does not allowed in this config
  //       htmlSupport: {
  //         allow: [
  //           {
  //             name: "img",
  //             attributes: {
  //               sizes: true,
  //               loading: true,
  //             },
  //           },
  //         ],
  //       },
  //     },
  //   },
  // },
  seo: {
    enabled: true,
  },
});
