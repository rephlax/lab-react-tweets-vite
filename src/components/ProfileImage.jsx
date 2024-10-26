export default function ProfileImage({ image, name }) {
    return (
      <img
        src={image}
        className="profile"
        alt={name}
      />
    );
  }