const FrameComponent1 = () => {
  return (
    <header className="self-stretch bg-white box-border flex flex-row items-start justify-start pt-6 px-8 pb-[22px] max-w-full text-left text-3xs text-white font-qanelas-soft border-b-[1px] border-solid border-gainsboro-100">
      <div className="h-12 w-[1088px] flex flex-row items-start justify-between gap-[20px] max-w-full">
        <div className="h-[50px] w-[322px] rounded-lg bg-white box-border flex flex-row items-start justify-start py-3 px-4 gap-[8px] max-w-[calc(100%_-_291px)] border-[1px] border-solid border-silver">
          <img className="h-6 w-6 relative" alt="" src="/search.svg" />
          <input
            className="w-[191px] [border:none] [outline:none] bg-[transparent] h-[22px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border font-qanelas-soft text-base text-darkgray"
            placeholder="Search by company name..."
            type="text"
          />
        </div>
        <div className="flex flex-row items-start justify-start gap-[8px]">
          <div className="w-14 flex flex-col items-start justify-start py-0 pr-2 pl-0 box-border">
            <div className="self-stretch h-12 relative rounded-45xl bg-whitesmoke-200">
              <img
                className="absolute top-[12px] left-[12px] w-6 h-6"
                alt=""
                src="/notifications.svg"
              />
              <div className="absolute top-[0px] left-[32px] rounded-xl bg-seagreen-200 overflow-hidden flex flex-row items-start justify-start py-0.5 px-[5px] z-[1]">
                <div className="relative leading-[12px] font-semibold inline-block min-w-[6px]">
                  4
                </div>
              </div>
            </div>
          </div>
          <img
            className="h-12 w-12 relative rounded-45xl overflow-hidden shrink-0 object-cover min-h-[48px]"
            loading="lazy"
            alt=""
            src="/frame-159360@2x.png"
          />
          <div className="flex flex-col items-start justify-start text-base text-darkslategray-200">
            <div className="relative leading-[24px] font-semibold inline-block min-w-[119px] whitespace-nowrap">
              Shailesh Vickram
            </div>
            <div className="relative text-sm leading-[24px] text-darkslategray-100 inline-block min-w-[49px]">
              Investor
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
            <img
              className="w-6 h-6 relative"
              alt=""
              src="/expand-circle-down.svg"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent1;
