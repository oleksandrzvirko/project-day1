var app = Vue.createApp({
    data() {
        return {
            quotes: [
                {
                    "quote": "This is just a Quote1",
                    "source": "Christopher"
                },
                {
                    "quote": "This is just a Quoteeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
                    "source": "Martin"
                },
                {
                    "quote": "This is just a Quote3",
                    "source": "Dennis"
                },
                {
                    "quote": "This is just a Quote4",
                    "source": ""
                },
            ],
            showWithAuthor: true,
        };
    },
    computed: {
        filteredQuotes() {
            if (this.showWithAuthor) {
                return this.quotes.filter(quote => quote.source !== "");
            } else {
                return this.quotes;
            }
        }
    },
    methods: {
        sortQuotes() {
            this.quotes.sort((a, b) => (a.source > b.source) ? 1 : -1);
        },
        quoteWithColor(quote) {
            return {
                color: quote.quote.length > 40 ? 'red' : 'black',
            };
        },
    }
});

app.mount('#app');
