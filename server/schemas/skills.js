export default {
    name: "skills",
    title: "Skills",
    type: "document",
    fields: [
        {
            name: "index",
            title: "Index",
            type: "number"
        },
        {
            name: "name",
            title: "Name",
            type: "string",
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true
            }
        }
    ]
};
