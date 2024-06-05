import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Table } from "flowbite-react";
import InvoiceModal from "./InvoiceModal";

const HistorySection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="px-5">
        <div className="flex flex-row items-center">
          <div className="font-semibold text-2xl mt-1">SL63 AMG</div>
          <div className="px-4 font-extrabold text-2xl">
            <MdKeyboardArrowDown />
          </div>
        </div>
        <div className=" text-gray-500 text-base mt-1">AMG 8904</div>
      </div>
      <div className="overflow-x-auto mt-4 rounded-2xl px-4">
        <Table striped>
          <Table.Head>
            <Table.HeadCell>Service Center</Table.HeadCell>
            <Table.HeadCell>Date</Table.HeadCell>
            <Table.HeadCell>Mileage (KM)</Table.HeadCell>
            <Table.HeadCell>Amount Paid</Table.HeadCell>
            <Table.HeadCell>Invoices</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            <Table.Row className="bg-white border-gray-200">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900">
                Benz Service Center Sdn Bhd
              </Table.Cell>
              <Table.Cell>25 Dec 2023</Table.Cell>
              <Table.Cell>47133</Table.Cell>
              <Table.Cell>RM 589.00</Table.Cell>
              <Table.Cell>
                <div
                  onClick={() => setIsOpen(true)}
                  className="font-medium text-cyan-600 hover:underline hover:font-semibold cursor-pointer"
                >
                  View
                </div>
              </Table.Cell>
            </Table.Row>
            <InvoiceModal isOpen={isOpen} setIsOpen={setIsOpen} />
            <Table.Row className="bg-white border-gray-200">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900">
                BR Jaya Sdn Bhd
              </Table.Cell>
              <Table.Cell>23 June 2023</Table.Cell>
              <Table.Cell>42350</Table.Cell>
              <Table.Cell>RM 599.00</Table.Cell>
              <Table.Cell>
                <a
                  href="#"
                  className="font-medium text-cyan-600 hover:underline hover:font-semibold"
                >
                  View
                </a>
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white border-gray-200">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900">
                BR Jaya Sdn Bhd
              </Table.Cell>
              <Table.Cell>08 Feb 2023</Table.Cell>
              <Table.Cell>37056</Table.Cell>
              <Table.Cell>RM 699.00</Table.Cell>
              <Table.Cell>
                <a
                  href="#"
                  className="font-medium text-cyan-600 hover:underline hover:font-semibold"
                >
                  View
                </a>
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white border-gray-200">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900">
                BR Jaya Sdn Bhd
              </Table.Cell>
              <Table.Cell>08 Feb 2023</Table.Cell>
              <Table.Cell>37056</Table.Cell>
              <Table.Cell>RM 699.00</Table.Cell>
              <Table.Cell>
                <a
                  href="#"
                  className="font-medium text-cyan-600 hover:underline hover:font-semibold"
                >
                  View
                </a>
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white border-gray-200">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900">
                BR Jaya Sdn Bhd
              </Table.Cell>
              <Table.Cell>08 Feb 2023</Table.Cell>
              <Table.Cell>37056</Table.Cell>
              <Table.Cell>RM 699.00</Table.Cell>
              <Table.Cell>
                <a
                  href="#"
                  className="font-medium text-cyan-600 hover:underline hover:font-semibold"
                >
                  View
                </a>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </>
  );
};

export default HistorySection;
