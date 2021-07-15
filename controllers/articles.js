let articles = [];

export const getArticles = (req, res) => {

    res.render('index', {articles: articles});
}

export const createArticle = (req, res) =>{

    const article = req.body;
  
    articles.push({ ...article });
  
    res.send(`article with the name ${article.title} added to the database`);
  
}

export const getArticle = (req, res) =>{

    const { id } = req.params;
  
    const foundArticle = articles.find((article) => article.id === id);
  
    res.send(foundArticle);
  
}

export const deleteArticle = (req, res) => {

    const { id } = req.params;
  
    articles = articles.filter((article) => article.id !== id);
  
    res.send(`Article with he id ${id} deleted from the database`)
  
}

export const updateArticle = (req,res) =>{

    const { id } =req.paramns;
  
    const {firstName, lastName, age} = req.body;
  
    const article = articles.find((article) => article.id == id);
  
    if(firstName) user.firstName = firstName;
  
    if(lastName) user.lastName = lastName;
  
    if(age) user.age = age;
  
    res.send(`Article with the id ${id} has been updated`);
  
}