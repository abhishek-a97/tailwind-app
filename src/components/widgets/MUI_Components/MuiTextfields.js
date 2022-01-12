import { TextField } from '@mui/material'
import React from 'react'
import { Controller } from 'react-hook-form'

const MuiTextfields = (props) => {
    var pattern = props.patternvalue;
    console.log(pattern);
    return (
        <Controller
            name={props.name}
            control={props.control}
            defaultValue=''
            render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
                label={props.label}
                variant="outlined"
                id={props.id}
                value={value}
                // defaultValue={value}
                onChange={((e)=>{props.setFunction(e.target.value)})}
                onChangeCapture={onChange}
                error={!!error}
                helperText={error ? error.message : null}
                required
                // color="secondary"
                // inputProps={{className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-fuchsia-500 focus:border-pink-500 focus:z-10 sm:text-sm"}}
                // className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-fuchsia-500 focus:border-pink-500 focus:z-10 sm:text-sm"
                className='w-full border-pink'
                InputProps={{border: 5}}
                />
            )}
            rules={props.rules}
        />
    )
}

export default MuiTextfields
