import BrandStyle from "./BrandStyle";
import logoBrand from "./BrandAssets";

function Brand() {
  const pathImage = `images/${logoBrand}`;
  return (
    <BrandStyle>
      <div className="brand">
        <img src={pathImage} alt="logo" />
      </div>
    </BrandStyle>
  );
}

export default Brand;
