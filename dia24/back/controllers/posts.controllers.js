
// Esta función me trae todos los posts

export const getAllPosts = (req, res) => {
    res.status(200).json(publicaciones);
}

// Esta función me devuelve un único post con sus comentarios

export const getPostWithComments = (req, res) => {
    res.status(200).json(Comments)
}