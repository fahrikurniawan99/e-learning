"use client"
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { Icon } from "@iconify/react/dist/iconify.js";

type Coursetype = {
  name: string;
};

const course: Coursetype[] = [
  { name: 'UX and UI Design' },
  { name: 'Front End Development' },
  { name: 'Back End Development' },
  { name: 'Ethical Hacking' },
]

const Dropdown = () => {
  const [selected, setSelected] = useState(course[0])

  return (
    <div className="w-full">
      <Listbox value={selected} onChange={setSelected}>
        <h3 className='text-lg text-lightgrey'>What do you want to learn?</h3>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white text-xl py-2 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate text-xl font-semibold ">{selected.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <Icon
                icon="tabler:chevron-down"
                className="text-gray-400 text-xl inline-block me-2"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {course.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                    }`
                  }
                  value={person}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                          }`}
                      >
                        {person.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <Icon
                            icon="tabler:check"
                            className="text-xl inline-block me-2"
                          />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}

export default Dropdown;
