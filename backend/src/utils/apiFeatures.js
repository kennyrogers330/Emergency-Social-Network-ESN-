class APIFeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }
  sort() {
    if (this.queryString.sort) {
      const sortby = this.queryString.sort.split(",").join(" ");
      this.query = this.query
        .sort(sortby)
        .collation({ locale: "en", strength: 2 });
    }
    return this;
  }

  fieldLimiting() {
    if (this.queryString.fields) {
      const fields = this.queryString.fields.split(",").join(" ");
      this.query = this.query.select(fields);
    }
    return this;
  }
}
export default APIFeatures;
