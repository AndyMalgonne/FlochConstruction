export default {
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    { name: "name", title: "Name", type: "string" },
    { name: "place", title: "Place", type: "string" },
    { name: "quote", title: "Quote", type: "text" },
    { name: "img", title: "Image", type: "imageAsset" }
  ]
};