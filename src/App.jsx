import React, { useReducer } from "react";
import ReactDOM from "react-dom";

import cntl from "cntl";
import Button from "./stories/Components/Button/Button";
import CollapsibleSection from "./stories/Components/CollapsibleSection/CollapsibleSection";
import Input from "./stories/Components/Input/Input";
import Dropdown from "./stories/Components/Dropdown/Dropdown";
import ProgressTracker from "./stories/Components/ProgressTracker/ProgressTracker";
import NavBar from "./stories/Components/NavBar/NavBar";

const containerCN = cntl`
  mt-3
  p-3
  border
  rounded
`;

const initialFormState = {
  companyName: "",
  subscription: "",
  eSpaceName: "",
  primaryOwner: "",
  primaryOwnerPhone: "",
  primaryOwnerEmail: "",
  streetAddress: "",
  suiteUnit: "",
  postalCode: "",
  city: "",
  country: "",
};

const actionTypes = {
  companyName: "COMPANY NAME",
  subscription: "SUBSCRIPTION",
  eSpaceName: "ESPACE NAME",
  primaryOwner: "PRIMARY OWNER",
  primaryOwnerPhone: "PRIMARY OWNER PHONE",
  primaryOwnerEmail: "PRIMARY OWNER EMAIL",
  streetAddress: "STREET ADDRESS",
  suiteUnit: "SUITE/UNIT",
  postalCode: "POSTAL CODE",
  city: "CITY",
  country: "COUNTRY",
};

const formReducer = (state, action) => {
  let newValue = "";

  switch (action.type) {
    case actionTypes.companyName:
      newValue = { companyName: action.value };
      break;

    case actionTypes.subscription:
      newValue = { subscription: action.value };
      break;

    case actionTypes.eSpaceName:
      newValue = { eSpaceName: action.value };
      break;

    case actionTypes.primaryOwner:
      newValue = { primaryOwner: action.value };
      break;

    case actionTypes.primaryOwnerPhone:
      newValue = { primaryOwnerPhone: action.value };
      break;

    case actionTypes.primaryOwnerEmail:
      newValue = { primaryOwnerEmail: action.value };
      break;

    case actionTypes.streetAddress:
      newValue = { streetAddress: action.value };
      break;

    case actionTypes.suiteUnit:
      newValue = { suiteUnit: action.value };
      break;

    case actionTypes.postalCode:
      newValue = { postalCode: action.value };
      break;

    case actionTypes.city:
      newValue = { city: action.value };
      break;

    case actionTypes.country:
      newValue = { country: action.value };
      break;

    default:
      break;
  }

  return { ...state, ...newValue };
};

const App = () => {
  const [formState, formStateDispatcher] = useReducer(
    formReducer,
    initialFormState
  );
  const formChangeHandler = (event, action) =>
    formStateDispatcher({
      type: action,
      value: event.target.value,
    });
  const companyNameChangeHandler = (newValue) =>
    formStateDispatcher({
      type: actionTypes.companyName,
      value: newValue,
    });
  const subscriptionChangeHandler = (newValue) =>
    formStateDispatcher({
      type: actionTypes.subscription,
      value: newValue,
    });
  const eSpaceNameChangeHandler = (newValue) =>
    formStateDispatcher({
      type: actionTypes.eSpaceName,
      value: newValue,
    });
  const primaryOwnerChangeHandler = (newValue) =>
    formStateDispatcher({
      type: actionTypes.primaryOwner,
      value: newValue,
    });
  const primaryOwnerPhoneChangeHandler = (newValue) =>
    formStateDispatcher({
      type: actionTypes.primaryOwnerPhone,
      value: newValue,
    });
  const primaryOwnerEmailChangeHandler = (newValue) =>
    formStateDispatcher({
      type: actionTypes.primaryOwnerEmail,
      value: newValue,
    });
  const streetAddressChangeHandler = (newValue) =>
    formStateDispatcher({
      type: actionTypes.streetAddress,
      value: newValue,
    });
  const suiteUnitChangeHandler = (newValue) =>
    formStateDispatcher({
      type: actionTypes.suiteUnit,
      value: newValue,
    });
  const postalCodeChangeHandler = (newValue) =>
    formStateDispatcher({
      type: actionTypes.postalCode,
      value: newValue,
    });
  const cityChangeHandler = (newValue) =>
    formStateDispatcher({
      type: actionTypes.city,
      value: newValue,
    });
  const countryChangeHandler = (newValue) =>
    formStateDispatcher({
      type: actionTypes.country,
      value: newValue,
    });
  const formSubmitHandler = () => console.log(formState);

  return (
    <div className="bg-gray-900 h-full w-full overflow-auto flex flex-col items-center">
      <div className="bg-black w-3/4">
        <NavBar />
      </div>

      <div className="bg-black p-10 w-3/4">
        <p className="">Add New Client</p>
        <ProgressTracker
          steps={Array(5)
            .fill()
            .map((a, index) => `Step ${index + 1}`)}
        />

        <div className="w-3/4">
          <CollapsibleSection title="Overview" defaultOpen={true}>
            <div className="flex">
              <div className="flex flex-col w-1/2 pr-8">
                <Input
                  label="Company Name"
                  placeholder="placeholder"
                  value={formState.companyName}
                  onChange={companyNameChangeHandler}
                />
                <Dropdown
                  label="Subscription"
                  options={Array(5)
                    .fill()
                    .map((a, index) => ({
                      label: `Option ${index + 1}`,
                      value: `Option ${index + 1}`,
                    }))}
                  isRequired={true}
                  value={formState.subscription}
                  onChange={subscriptionChangeHandler}
                />
              </div>
              <div className="flex flex-col w-1/2 pr-8">
                <Input
                  label="eSpace Name"
                  placeholder="placeholder"
                  isRequired={true}
                  value={formState.eSpaceName}
                  onChange={eSpaceNameChangeHandler}
                />
              </div>
            </div>
          </CollapsibleSection>
        </div>

        <div className="w-3/4">
          <CollapsibleSection title="Owner Information" defaultOpen={true}>
            <div className="flex">
              <div className="flex flex-col w-1/2 pr-8">
                <Input
                  label="Primary Owner"
                  placeholder="placeholder"
                  isRequired={true}
                  value={formState.primaryOwner}
                  onChange={primaryOwnerChangeHandler}
                />
                <Input
                  label="Primary Owner Phone"
                  placeholder="placeholder"
                  isRequired={true}
                  value={formState.primaryOwnerPhone}
                  onChange={primaryOwnerPhoneChangeHandler}
                />
              </div>
              <div className="flex flex-col w-1/2 pr-8">
                <Input
                  label="Primary Owner Email"
                  placeholder="placeholder"
                  isRequired={true}
                  value={formState.primaryOwnerEmail}
                  onChange={primaryOwnerEmailChangeHandler}
                />
              </div>
            </div>
          </CollapsibleSection>
        </div>

        <div className="w-3/4">
          <CollapsibleSection title="Location Information" defaultOpen={true}>
            <div className="flex">
              <div className="flex flex-col w-1/2 pr-8">
                <Input
                  label="Street Address"
                  placeholder="placeholder"
                  isRequired={true}
                  value={formState.streetAddress}
                  onChange={streetAddressChangeHandler}
                />
                <Input
                  label="Suite/Unit"
                  placeholder="placeholder"
                  value={formState.suiteUnit}
                  onChange={suiteUnitChangeHandler}
                />
                <Input
                  label="Postal Code"
                  placeholder="placeholder"
                  isRequired={true}
                  value={formState.postalCode}
                  onChange={postalCodeChangeHandler}
                />
              </div>
              <div className="flex flex-col w-1/2 pr-8">
                <Input
                  label="City"
                  placeholder="placeholder"
                  isRequired={true}
                  value={formState.city}
                  onChange={cityChangeHandler}
                />
                <Dropdown
                  label="Country"
                  options={Array(5)
                    .fill()
                    .map((a, index) => ({
                      label: `Option ${index + 1}`,
                      value: `Option ${index + 1}`,
                    }))}
                  value={formState.country}
                  onChange={countryChangeHandler}
                />
              </div>
            </div>
          </CollapsibleSection>
          <div className="my-12">
            <Button title="Save" onClick={formSubmitHandler} />
          </div>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
