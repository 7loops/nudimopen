import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import type { Category } from '@/lib/services';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'data', 'services.json');
    const fileContents = await fs.readFile(filePath, 'utf8');
    const services: Category[] = JSON.parse(fileContents);
    
    return NextResponse.json(services);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to load services' }, { status: 500 });
  }
}