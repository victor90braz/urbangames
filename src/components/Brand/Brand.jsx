import BrandStyle from "./BrandStyle";
import BrandAtributes from "./BrandAssets";

function Brand() {
  const pathImage = `images/${BrandAtributes.image}`;
  return (
    <BrandStyle>
      <div className="brand">
        <img src={pathImage} alt={BrandAtributes.alt} />
      </div>
    </BrandStyle>
  );
}

export default Brand;
