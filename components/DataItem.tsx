
export default function DataItem(props: any) {
  const { item, index, type } = props;

  return (
    <div>
      <div className="flex text-left items-center justify-between">
        <div>
          <div className="mr-4 w-7 h-7 rounded-full bg-slate-300 flex justify-center items-center">
            <h2 className="absolute text-sm">
            {index}
            </h2>
          </div>
        </div>
        <span className="break-words w-[550px]">
          {type != "Link" ?
            type != "Heading" ?
              <h2 className="text-base">
              `{item}`
              </h2>
              :
              <h2 className="font-semibold">
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
