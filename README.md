# Welcome to Web.IO!
Web.io is a blogging platform, aimed at discussion. Real-time conversations can be made on every blog.
We.io aims to keep people connected. follow your favorite people and get updated when they make a new post!

# API
## Web.io has an extensive backend, allowing for third-party access.

# Blog Requests: (/blog)

<details>
<summary>
  
  ## Get Blog
  
</summary>

- **Method**: GET
- **Params**: `:id`
- **Route**: `/blog/get/:id`
  
</details>

<details>
<summary>
  
  ## Get All Blogs
  
</summary>

- **Method**: GET
- **Route**: `/blog/getAll/`
  
</details>

<details>
<summary>
  
  ## Get All by User
  
</summary>

- **Method**: GET
- **Params**: `:userid`
- **Route**: `/blog/getAll:id`
  
</details>

<details>
<summary>
  
  ## Delete Blog
  
</summary>

- **Method**: DELETE
- **Params**: `:id`
- **Route**: `/blog/delete/:id`
  
</details>

<details>
<summary>
  
  ## Add/Edit Blog
  
</summary>

- **Method**: Patch
- **Params**: `:id`
- **Route**: `/blog/append/:id`
  
</details>

<details>
<summary>
  
  ## Get by Title
  
</summary>

- **Method**: Get
- **Params**: `:keyword`
- **Route**: `/blog/append/:keyword?`
  
</details>

# User Requests: (/user)

<details>
<summary>
  
  ## Signup
  
</summary>

- **Method**: POST
- **Route**: `/user/signup`
  
</details>

<details>
<summary>
  
  ## Signin
  
</summary>

- **Method**: POST
- **Route**: `/user/signin`
  
</details>

<details>
<summary>
  
  ## Get User
  
</summary>

- **Method**: Get
- **params**: `id`
- **Route**: `/user/get/:id`
  
</details>

<details>
<summary>
  
  ## Update User Data
  
</summary>

- **Method**: POST
- **Prams**: `id`
- **Route**: `/user/update/:id`
  
</details>

<details>
<summary>
  
  ## Add Favorite
  
</summary>

- **Method**: POST
- **Prams**: `id`
- **Route**: `/user/favorite/add/:id`
  
</details>

<details>
<summary>
  
  ## Remove Favorite
  
</summary>

- **Method**: POST
- **Prams**: `id`
- **Route**: `/user/favorite/remove/:id`
  
</details>

<details>
<summary>
  
  ## Get Follower Count
  
</summary>

- **Method**: Get
- **Prams**: `id`
- **Route**: `/user/follower/count/:id`
  
</details>

<details>
<summary>
  
  ## Get Following Count
  
</summary>

- **Method**: Get
- **Prams**: `id`
- **Route**: `/user/following/count/:id`
  
</details>



