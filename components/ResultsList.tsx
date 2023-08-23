import DataItem from "./DataItem";

export default function ResultsList(props: any) {
  const { data, type } = props;
  const dataSectionCSS: string = `max-w-xl mb-12`;
  const dataHeadingCSS: string = `mb-1 text-lg`;
  const dataResultsCSS: string = `flex flex-col space-y-6 justify-center items-start`;

  return (
    <div>
      {
      data ?
        <div className={dataSectionCSS}>
          <h1 className={dataHeadingCSS}>
          {type} Data
          </h1>
          {
            data.length ?
            <p className="mb-6 text-sm text-gray-500">
            {data.length > 1 ? data.length + " items" : "1 item"} found
            </p>
            :
            <p className="text-sm mb-6 text-gray-500">
            0 items found
            </p>
          }
          {
            data.length ?
              <div className={dataResultsCSS}>
                { data.map((item: any) => <DataItem item={item} index={data.indexOf(item) + 1} key={item} type={type} /> )}
              </div>
            :
              <div className="mt-8 font-light text-gray-500 text-center">
                <h2>
                  No {type.toLowerCase()} data found!
                </h2>
              </div>
          }
        </div>
      :
        <div>
        </div>
    }
    </div>
  )
};
