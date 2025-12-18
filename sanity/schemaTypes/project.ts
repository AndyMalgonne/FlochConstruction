export default {
  name: "project",
  title: "Project / Portfolio",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title" } },
    { name: "images", title: "Images", type: "array", of: [{ type: "imageAsset" }] },
    { name: "description", title: "Description", type: "text" }
  ]
};