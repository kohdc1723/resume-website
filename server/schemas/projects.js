export default {
    name: "projects",
    title: "Projects",
    type: "document",
    fields: [
        {
            name: "index",
            title: "Index",
            type: "number"
        },
        {
            name: "title",
            title: "Title",
            type: "string"
        },
        {
            name: "description",
            title: "Description",
            type: "string"
        },
        {
            name: "projectInfo",
            title: "ProjectInfo",
            type: "string"
        },
        {
            name: "startDate",
            title: "StartDate",
            type: "string"
        },
        {
            name: "endDate",
            title: "EndDate",
            type: "string"
        },
        {
            name: "stack",
            title: "Stack",
            type: "array",
            of: [{ type: "string" }]
        },
        {
            name: "gitLink",
            title: "GitLink",
            type: "string"
        },
        {
            name: "projectLink",
            title: "ProjectLink",
            type: "string"
        },
        {
            name: "thumbnail",
            title: "Thumbnail",
            type: "image",
            options: {
                hotspot: true
            }
        },
        {
            name: "screenshots",
            title: "Screenshots",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        {
                            name: "image",
                            title: "Image",
                            type: "image",
                            options: {
                                hotspot: true
                            }
                        },
                        {
                            name: "caption",
                            title: "Caption",
                            type: "string"
                        }
                    ]
                }
            ]
        },
        {
            name: "contributions",
            title: "Contributions",
            type: "array",
            of: [{ type: "string" }]
        }
    ]
};
