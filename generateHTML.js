function generateHTML(data) {
    return `
    <!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Team Profile</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel='stylesheet' type='text/css' media='screen' href='main.css'>
    <script src='main.js'></script>
</head>
<body>

    <h1>${data.name}</h1>
    <h2>${data.id}</h2>
    <h2>${data.email}</h2>
    <h2>${data.role}</h2>

</body>
</html>
    `
}




module.exports = generateHTML;