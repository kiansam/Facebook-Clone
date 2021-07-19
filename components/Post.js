function Post({ name, message, email, postImage, image, timestamp }) {
  return (
    <div className="flex flex-col">
      <div>
        <div>
          <img
            src={image}
            className="rounded-full"
            width={40}
            height={40}
            alt="a"
          />
          <div>
            <p>{name}</p>
            <p className="text-xs text-gray-400">
              {new Date(timestamp?.toDate()).toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
