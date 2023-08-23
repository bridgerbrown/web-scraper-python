
export default function DataItem(props: any) {
  const { item, index } = props;

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="mr-4 w-7 h-7 rounded-full bg-slate-300 flex justify-center items-center">
          <h2 className="absolute text-base">
          {index}
          </h2>
        </div>
        <h2 className="text-base">
        "{item}"
        </h2>
      </div>
    </div>
  )
};
