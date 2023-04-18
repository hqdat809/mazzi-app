interface TCategory {
  categoryId: number;
  categoryName: string;
  userId: number;
  parent_cate_id: number;
  date: Date;
  created_at: Date;
  updated_at: Date;
  status: number;
  share_status: number;
  share_hash: string;
}

export { TCategory };
