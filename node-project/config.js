const config = {
    dbUrl: process.env.DB_URL || 'mongodb+srv://ups:12345@cluster0.pjyad.gcp.mongodb.net/ups?retryWrites=true&w=majority',
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'http://localhost',
    publicRoute: process.env.PUBLIC_ROUTE || '/',
    filesRoute: process.env.FILES_ROUTE || 'files'
}

module.exports = config