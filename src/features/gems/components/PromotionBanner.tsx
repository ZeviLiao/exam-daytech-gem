import { Link } from 'react-router-dom';

export default function PromotionBanner() {
  return (
    <div className="flex flex-row justify-center py-10">
      <div
        className="flex flex-row w-full items-center p-5 bg-black rounded-[10px]"
        style={{
          backgroundImage: 'url(/productsSubBanner.jfif)',
          backgroundColor: 'black',
          backgroundPosition: 'center right -5rem',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'auto',
        }}
      >
        <div className="lg:px-12 flex flex-col gap-[20px] lg:gap-[22px] rounded-[10px] md:w-full w-1/2">
          <div className="text-mobileTitle md:text-title text-white">精選優惠</div>
          <div className="text-normal font-light text-white">
            精選優惠不時推出，為您帶來無限驚喜。 立即探索更多！
          </div>
          <div className="lg:block">
            <Link to="/sale">
              <button
                className="hover:bg-neutral-400 text-light border-light flex gap-2 items-center transform duration-500 rounded-[5px] px-4 py-1 w-fit border justify-center border-solid"
                type="button"
              >
                立即前往
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
