
export default function DataItem(props: any) {
  const { item, index, type } = props;

  return (
    <div>
      <div className="flex text-left items-center justify-between">
        <div>
          <div className="mr-4 md:w-7 md:h-7 w-5 h-5 rounded-full bg-slate-300 flex justify-center items-center">
            <h2 className="absolute md:text-sm text-xs">
            {index}
            </h2>
          </div>
        </div>
        <span className="break-words md:w-[550px]">
          {type != "Link" ?
            type != "Heading" ?
              <h2 className="md:text-base text-sm">
              `{item}`
              </h2>
              :
              <h2 className="font-semibold md:text-base text-sm">
              `{item[1]}`
              </h2>
            :
            <a 
              href={item[1]}
              target="_blank" rel="noopener noreferrer"
              className="text-blue-500 underline underline-offset-2"
            >
              {item[0]}
            </a>
          }
        </span>
      </div>
    </div>
  )
};
