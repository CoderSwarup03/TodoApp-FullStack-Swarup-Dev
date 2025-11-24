import React, { useState } from 'react'

const TodoItem = ({ todo, deleteTodo, updateTodo }) => {
    const [editModal, setEditModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [editedTitle, setEditedTitle] = useState(todo.title);

    const handleSave = () => {
        updateTodo(todo._id, editedTitle);
        setEditModal(false)
    }

    const handleDelete = () => {
        deleteTodo(todo._id)
        setDeleteModal(false)
    }

    return (
        <>
            <div className='flex flex-col md:flex-row justify-between my-3 p-3 border-2 border-green-500 rounded-md'>
                <div>
                    <h1 className='text-xl font-bold'>{todo.title}</h1>
                </div>
                {/* deleteModal */}
                <div>
                    <div className={`fixed inset-0 z-40 min-h-full overflow-y-auto overflow-x-hidden transition flex items-center ${deleteModal ? 'block' : 'hidden'}`}>
                        {/* overlay */}
                        <div
                            aria-hidden="true"
                            className="fixed inset-0 w-full h-full bg-black/50 cursor-pointer"
                        ></div>
                        {/* Modal */}
                        <div className="relative w-full cursor-pointer pointer-events-none transition my-auto p-4">
                            <div className="w-full py-2 bg-white cursor-default pointer-events-auto dark:bg-gray-800 relative rounded-xl mx-auto max-w-sm">
                                <button
                                    onClick={() => setDeleteModal(false)}
                                    tabIndex={-1}
                                    type="button"
                                    className="absolute top-2 right-2 rtl:right-auto rtl:left-2"
                                >
                                    <svg
                                        title="Close"
                                        tabIndex={-1}
                                        className="h-4 w-4 cursor-pointer text-gray-400"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="sr-only">Close</span>
                                </button>
                                <div className="space-y-2 p-2">
                                    <div className="p-4 space-y-2 text-center dark:text-white">
                                        <h2
                                            className="text-xl font-bold tracking-tight"
                                            id="page-action.heading"
                                        >
                                            Are You Sure!
                                        </h2>
                                        <p className="text-gray-500">
                                            Are you sure delete this todo
                                        </p>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div
                                        aria-hidden="true"
                                        className="border-t dark:border-gray-700 px-2"
                                    />
                                    <div className="px-6 py-2">
                                        <div className="grid gap-2 grid-cols-[repeat(auto-fit,minmax(0,1fr))]">
                                            <button
                                                onClick={() => setDeleteModal(false)}
                                                type="button"
                                                className="inline-flex items-center justify-center py-1 gap-1 font-medium rounded-lg border transition-colors outline-none focus:ring-offset-2 focus:ring-2 focus:ring-inset dark:focus:ring-offset-0 min-h-[2.25rem] px-4 text-sm text-gray-800 bg-white border-gray-300 hover:bg-gray-50 focus:ring-primary-600 focus:text-primary-600 focus:bg-primary-50 focus:border-primary-600 dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-600 dark:hover:border-gray-500 dark:text-gray-200 dark:focus:text-primary-400 dark:focus:border-primary-400 dark:focus:bg-gray-800 cursor-pointer"
                                            >
                                                <span className="flex items-center gap-1">
                                                    <span className="">Cancel</span>
                                                </span>
                                            </button>
                                            <button
                                                onClick={() => handleDelete()}
                                                type="submit"
                                                className="inline-flex items-center justify-center py-1 gap-1 font-medium rounded-lg border transition-colors outline-none focus:ring-offset-2 focus:ring-2 focus:ring-inset dark:focus:ring-offset-0 min-h-[2.25rem] px-4 text-sm text-white shadow focus:ring-white border-transparent bg-red-600 hover:bg-red-500 focus:bg-red-700 focus:ring-offset-red-700 cursor-pointer"
                                            >
                                                <span className="flex items-center gap-1">
                                                    <span className="">Confirm</span>
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* edit modal added here */}
                <div className={`modal fixed w-full h-full top-0 left-0 flex items-center justify-center ${editModal ? 'block' : 'hidden'}`}>
                    {/* hoverlay  */}
                    <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50" />
                    <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
                        {/* Add modal content here */}
                        <div className="modal-content py-4 text-left px-6">
                            <div className="flex justify-between items-center pb-3">
                                <p className="text-2xl font-bold">Edit Your Todo</p>
                                <div className="modal-close cursor-pointer z-50">
                                    <svg
                                        className="fill-current text-black"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={18}
                                        height={18}
                                        viewBox="0 0 18 18"
                                    >
                                        <path d="M1.39 1.393l15.318 15.314m-15.318 0L16.706 1.393" />
                                    </svg>
                                </div>
                            </div>
                            <input
                                className="w-full px-3 py-2 mb-3 border-2 border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 text-lg"
                                value={editedTitle}
                                onChange={(e) => setEditedTitle(e.target.value)}
                            />
                            <div className="mt-4 flex justify-end">
                                <button onClick={() => setEditModal(false)} className="modal-close px-4 bg-gray-100 p-3 rounded-lg text-black hover:bg-gray-200">
                                    Cancel
                                </button>
                                <button onClick={handleSave} className="px-4 bg-purple-500 p-3 ml-3 rounded-lg text-white hover:bg-purple-400">
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex gap-4'>
                    <button
                        onClick={() => setEditModal(!editModal)}
                        className='bg-green-500 hover:bg-green-600 px-3 py-1 rounded-md text-white font-semibold cursor-pointer'>Edit</button>
                    <button
                        onClick={() => setDeleteModal(!deleteModal)}
                        className='bg-red-500 hover:bg-red-600 px-3 py-1 rounded-md text-white font-semibold cursor-pointer'>Delete</button>
                </div>
            </div>
        </>
    )
}

export default TodoItem