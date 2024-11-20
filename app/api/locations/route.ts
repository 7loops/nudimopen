import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import type { Location } from '@/lib/locations';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'data', 'locations.json');
    const fileContents = await fs.readFile(filePath, 'utf8');
    const locations: Location[] = JSON.parse(fileContents);
    
    return NextResponse.json(locations);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to load locations' }, { status: 500 });
  }
}