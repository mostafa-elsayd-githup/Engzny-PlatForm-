import type { TitlePropsType } from "../../../Types/Header";

function DinamicHeader({ mainTitle, someTitle }: TitlePropsType) {
  return (
    <>
      <div
        className={`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2`}
      >
        <h2 className="">{mainTitle}</h2>
        {someTitle && (
          <span className="text-xs text-(--text-muted) leading-normal">
            {someTitle}
          </span>
        )}
      </div>
      <hr className="border-(--border-color) " />
    </>
  );
}

export default DinamicHeader;
