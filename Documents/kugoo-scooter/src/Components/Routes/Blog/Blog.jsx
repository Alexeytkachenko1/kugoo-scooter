import blog from "../../../assets/img/blog.png";
import "./Blog.scss";
const Blog = () => {
  return (
    <div className="blog container">
      <img className="blog-img" src={blog} alt="" />
      <h2 className="blog-header">Блог Kugoo</h2>
    </div>
  );
};
export default Blog;
