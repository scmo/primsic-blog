var app = new Vue({
    el: '#app',
    data: {
        blogEntries: [],
        selectedBlogEntry: null
    },
    mounted: function () { // the 'mounted' function is trigger when the view is ready
        // Fetch blog entries
        Prismic.api("https://my-hello-world.prismic.io/api", (error, api) =>  {
            var options = {}; // In Node.js, pass the request as 'req' to read the reference from the cookies
            api.query(Prismic.Predicates.at('document.type', 'blog_entry'), options, (err, response) => { // An empty query will return all the documents
                if (err) {
                    console.error("Something went wrong: ", err);
                }
                this.blogEntries = response.results;
            });
        });
    },
    methods: {
        selectBlog: function (blogEntry) {
            this.selectedBlogEntry = blogEntry
        }
    }
})