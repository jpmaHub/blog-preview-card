import ArticleImage from "../assets/images/illustration-article.svg";
import AuthorImage from "../assets/images/image-avatar.webp";
import './BlogPreviewCard.css';

export default function BlogPreviewCard() {
  return (
    <div className="blog-preview-card">
      <div className="blog-preview-card-media">
        <img className="article-image" src={ArticleImage} alt="article" />
      </div>

      <div className="blog-preview-card-content">
        <div className="learning-tag">Learning</div>
        <div className="subtitle">Published 21 Dec 2023</div>
        <div className="heading">HTML & CSS foundations</div>
        <div className="paragraph">
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </div>

        <div className="grid-container-author">
          <div className="grid-item-author">
            <img className="author-image" src={AuthorImage} alt="author" />
          </div>
          <div className="grid-item-author">
            <p className="author-name">Greg Hooper</p>
          </div>
        </div>
        
      </div>
    </div>
  );
}
