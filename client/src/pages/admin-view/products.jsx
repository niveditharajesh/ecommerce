import ProductImageUpload from "@/components/admin-view/image-upload";
import CommonForm from "@/components/common/form";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { addHostelFormElements } from "@/config";
import { Fragment, useState } from "react";


const initialFormData = {
    image: null,
  title: "",
  description: "",
  category: "",
  brand: "",
  price: "",
  salePrice: "",
  totalStock: "",
  
}

function AdminProducts() {


    const [openCreateProuctsDialog, setOpenCreateProuctsDialog] = useState(false);
    const [formData, setFormData] = useState(initialFormData);
    const [imageFile, setImageFile] = useState(null);
    const [uploadedImageUrl, setUploadedImageUrl] = useState('')
    
    function onSubmit(){

    }

    return (  
        <Fragment>
            <div className="mb-5 w-full flex justify-end">
                <Button onClick={()=>setOpenCreateProuctsDialog(true)}>Add new </Button>

            </div>
            <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
            </div>
            <Sheet open={openCreateProuctsDialog} onOpenChange={()=> {setOpenCreateProuctsDialog(false)}}>
                <SheetContent side="right" className="overflow-auto">
                    <SheetHeader>
                        <SheetTitle>Add New</SheetTitle>
                    </SheetHeader>
                    <ProductImageUpload 
                    imageFile={imageFile} 
                    setImageFile={setImageFile}
                    uploadedImageUrl={uploadedImageUrl}
                    setUploadedImageUrl={setUploadedImageUrl}/>
                    <div className="py-6">
                        <CommonForm 
                        onSubmit={onSubmit} 
                        formData={formData} 
                        setFormData={setFormData}
                        buttonText="ADD" 
                        formControls={addHostelFormElements}/>
                    </div>
                </SheetContent>
            </Sheet>
        </Fragment>
    );
}

export default AdminProducts;