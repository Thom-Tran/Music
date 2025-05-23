export const Title=(props: {text: string, className: String})=>{
    const {text, className=" "} = props;
    return(
        <>
        <div className={"font-[700] text-[24px] text-[#EFEEE0] mb-[20px]" + className}>
            {text}
          </div>
        </>
    )
}