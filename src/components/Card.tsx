export interface CardProps {
  title: string;
  content: string | number;
}

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div>
      <p className="title">{title}</p>
      <p className="content">{content}</p>
    </div>
  );
};

export default Card;
