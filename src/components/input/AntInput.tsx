import { Form, Input } from "antd";
import React, { ChangeEvent } from "react";

interface IAntInput {
  name?: string;
  labelName?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  className?: string;
  require?: NodeRequire;
}

export default function AntInput(props: IAntInput) {
  const {
    name,
    labelName,
    value,
    defaultValue,
    onChange,
    placeholder,
    className,
    require,
  } = props;

  return (
    <div>
      <label className="text-sm">{labelName}</label>
      <Form.Item
        name={name}
        rules={[
          {
            required: require !== null,
            message: `Masukkan ${labelName}!`,
          },
        ]}
        hasFeedback
      >
        <Input
          name={name}
          size="middle"
          value={value}
          variant="filled"
          defaultValue={defaultValue}
          placeholder={labelName ? `masukkan ${labelName}` : placeholder}
          onChange={onChange}
          className={`${className} hover:border-brand-muted focus:border-brand`}
        />
      </Form.Item>
    </div>
  );
}

// <Input
//   name={name}
//   variant="filled"
//   value={value}
//   defaultValue={defaultValue}
//   placeholder={`masukkan ${labelName} `}
//   onChange={onChange}
//   className={`${className} p-2 hover:border-brand-muted focus:border-brand`}
// />
