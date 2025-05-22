// phpcs:ignoreFile
import{B as l,a as p}from"./banner.stories.data-DXMZcPYG.js";import{C as m}from"./constants-DyyrGQu8.js";import"./twig-CcN5Lhas.js";import"./_commonjsHelpers-C4iS2aBk.js";import"./breadcrumb-CQE5FkPe.js";import"./item-list-CYYvMDFd.js";import"./link-DKj_dnkB.js";import"./text-icon-CoWuG2rY.js";import"./icon-DuUxfm1h.js";import"./heading-Ce1Imkc_.js";import"./image-DDC11ohZ.js";import"./paragraph-CW79X7x3.js";import"./button-5uaxz_eR.js";import"./navigation-card-BHC3OlxQ.js";import"./grid-BNl-y6Ea.js";const j={title:"Organisms/Banner",component:l,argTypes:{theme:{control:{type:"radio"},options:["light","dark"]},content_top1:{control:{type:"text"}},breadcrumb:{control:{type:"array"}},content_top2:{control:{type:"text"}},content_top3:{control:{type:"text"}},content_middle:{control:{type:"text"}},content:{control:{type:"text"}},content_bottom:{control:{type:"text"}},content_below:{control:{type:"text"}},site_section:{control:{type:"text"}},title:{control:{type:"text"}},is_decorative:{control:{type:"boolean"}},featured_image:{control:{type:"object"}},background_image:{control:{type:"object"}},background_image_blend_mode:{control:{type:"select"},options:m.SCSS_VARIABLES["ct-background-blend-modes"]},modifier_class:{control:{type:"text"}},attributes:{control:{type:"text"}}}},t={parameters:{layout:"fullscreen"},args:p.args("light")},e={parameters:{layout:"fullscreen",backgrounds:{default:"Dark"}},args:p.args("dark")};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  args: BannerData.args('light')
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};var n,s,c;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'Dark'
    }
  },
  args: BannerData.args('dark')
}`,...(c=(s=e.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};const A=["Banner","BannerDark"];export{t as Banner,e as BannerDark,A as __namedExportsOrder,j as default};
