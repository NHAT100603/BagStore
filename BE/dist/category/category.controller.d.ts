import { CategoryService } from "./category.service";
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    GetAllCategory(res: any): Promise<any>;
}
