import { BRAND } from "@/types/brand";
import Image from "next/image";

const brandData: BRAND[] = [
  {
    logo: "/images/logo/zepplin.png",
    name: "Zeplin",
    Amount: 686.0,
    Status: "Active",
    Active:true,
    Pending:false,
    Cancelled:false,
    UserId: 114423,
    Joined: "October",
    Group: "Design",
  },
  {
    logo: "/images/logo/figma.png",
    name: "Figma",
    Amount: 864.0,
    Status: "Pending",
    Active:true,
    Pending:false,
    Cancelled:false,
    UserId: 76223,
    Joined: "June",
    Group: "Finance",
  },
  {
    logo: "/images/logo/meta.png",
    name: "Meta",
    Amount: 176.0,
    Status: "Cancelled",
    Active:true,
    Pending:false,
    Cancelled:false,
    UserId: 89453,
    Joined: "March",
    Group: "Coding",
  },
  {
    logo: "/images/logo/angular.png",
    name: "Angular",
    Amount: 49.0,
    Status: "Active",
    Active:true,
    Pending:false,
    Cancelled:false,
    UserId: 11467,
    Joined: "Feburary",
    Group: "Marketing",
  },
  {
    logo: "/images/logo/vue.png",
    name: "Vue",
    Amount: 999.0,
    Status: "Active",
    Active:true,
    Pending:false,
    Cancelled:false,
    UserId: 67385,
    Joined: "October",
    Group: "Finance",
  },
];

const TableOne = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
       Installed Apps
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-6">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Source
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Amount
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Status
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              UserId
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Joined
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Group
            </h5>
          </div>
        </div>

        {brandData.map((brand, key) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-6 ${
              key === brandData.length - 1
                ? ""
                : "border-b border-stroke dark:border-strokedark"
            }`}
            key={key}
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <div className="flex-shrink-0">
                <img src={brand.logo} alt="Brand" width={48} height={48} />{" "}
                {/* Changed "Image" component to "img" */}
              </div>
              <p className="text-xl font-bold text-black dark:text-white sm:block">
                {brand.name}
              </p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-slate-500 dark:text-white">{brand.Amount}</p>
            </div>

            <div className="flex w-16 items-center justify-center p-2.5 xl:p-12 ">
            <p
                    className={`inline-flex rounded-full bg-opacity-10 px-3 py-1 text-sm font-medium ${
                      brand.Status === "Active"
                        ? "bg-success text-success"
                        : brand.Status === "Pending"
                          ? "bg-danger text-danger"
                          : "bg-slate-500 text-slate-800"
                    }`}
                  >
                    {brand.Status}
                  </p>
            </div>

            <div className="hidden items-center justify-center p-2.5 font-bold sm:flex xl:p-5">
              <p className="text-slate-500 dark:text-white">{brand.UserId}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-slate-500">{brand.Joined}</p>
            </div>
            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-slate-500">{brand.Group}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableOne;
