import { ISearchResult } from "../types/CommenTypes";

export default class {
    /**
     * 根据id查询文章
     * @param articleId 文章ID
     */
    public static async findById(articleId: string) {
        console.log(articleId);
    }
    /**
     * 根据条件查询文章
     * @param payload 查询参数
     */
    public static async find(payload: object): Promise<ISearchResult<object>> {
        console.log(payload);
        return {
            data: [{}],
            errors: [""],
            count: 10,
        };
    }
}