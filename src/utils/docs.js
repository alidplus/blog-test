exports.needsAuth = () => ({
  security: [{ bearerAuth: [] }]
})

exports.pagination = (name) => ({
  type: "object",
  properties: {
    total: {
      type: "number",
      description: ""
    },
    skip: {
      type: "number",
      description: ""
    },
    limit: {
      type: "number",
      description: ""
    },
    data: {
      title: `${name} list`,
      type: "array",
      items: {
        $ref: `#/components/schemas/${name}`
      }
    }
  }
})

exports.populates = (...names) => ({
  "parameters[]": {
    description: "fields to populate",
    in: "query",
    name: "$populate",
    schema: {
      type: "array",
      items: {
        type: "string",
        enum: names
      }
    },
    explode: true
  }
})