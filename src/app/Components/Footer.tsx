const Footer = () => {
  return (
    <div className="flex justify-center text-black p-4">
      <h1 className="text-sm">
        Thank you has been visiting, I hope we will discuss more about any
        opportunity
      </h1>
      <span className="mx-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="red"
          className="bi bi-heart-fill"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
          />
        </svg>
      </span>
    </div>
  );
};
export default Footer;
